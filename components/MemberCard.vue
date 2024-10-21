<template>
  <div class="card">
    <a :href="member.url" target="_blank" class="card-link">
      <img :src="member.image" alt="Profile picture" class="card-img">
      <div class="card-details">
        <h3>{{ member.name }}</h3>
        <p>{{ member.role }}</p>
        <p>{{ member.affiliation }}</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.card-link {
  text-decoration: none;
  color: inherit;
}

.card {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  overflow: hidden;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-img {
  width: 100%;
  object-fit: cover;
  max-width: 250px;
}

.card-details {
  text-align: left;
  padding: 16px;
}

h3 {
  margin: 8px 0;
  font-size: 1.5em;
  color: inherit;
}

p {
  margin: 4px 0;
  color: #666;
}
</style>