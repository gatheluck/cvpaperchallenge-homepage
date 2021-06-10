"""Optimize PNG image size
"""
import argparse
import pathlib
import subprocess
import tempfile


def optimize(source: pathlib.Path, destination: pathlib.Path) -> None:
    # NamedTemporaryFileは、呼ぶ出されると新しいファイルを作ります。この
    # 新しく作られたファイルが存在していると、optipngは出力先のファイルが存在
    # しているからと、ファイルの生成をしなくなります。最適化後のファイルを生成
    # してもらうために、安全に使えるファイルパスを取得後、withブロックを抜けて
    # NamedTemporaryFileが作ったファイルを削除しています。
    with tempfile.NamedTemporaryFile() as f:
        intermediate_file: Final = f.name

    subprocess.run(
        [
            "optipng",
            "-quiet",
            "-o7",
            "--strip",
            "all",
            "-out",
            intermediate_file,
            source.absolute().as_posix(),
        ],
        check=True,
    )
    subprocess.run(
        [
            "pngquant",
            "--speed",
            "1",
            "--output",
            destination.absolute().as_posix(),
            intermediate_file,
        ]
    )

    pathlib.Path(intermediate_file).unlink()


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "project_id",
        metavar="project-id",
        type=str,
        help="ID of image.",
    )
    parser.add_argument(
        "pngs",
        type=argparse.FileType("r"),
        nargs="+",
        help="path to PNG image which you want to optimize.",
    )

    args = parser.parse_args()
    project_id: Final = args.project_id
    for i, png in enumerate(args.pngs, start=1):
        if len(args.pngs) == 1:
            print(f"start image optimization")
            optimize(pathlib.Path(png.name), pathlib.Path(f"{project_id}.png"))
            print(f"finish image optimization")
        else:
            print(f"start {i}-th image optimization")
            optimize(pathlib.Path(png.name), pathlib.Path(f"{project_id}-{i}.png"))
            print(f"finish {i}-th image optimization")


if __name__ == "__main__":
    main()