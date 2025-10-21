<template>
  <div class="video-card">
    <img :src="thumbnail" :alt="title" class="thumbnail" />
    <div class="video-info">
      <h3 class="video-title">{{ title }}</h3>
      <p class="video-channel">{{ channel }}</p>
      <div class="video-meta">
        <span class="video-views">{{ views }} views</span>
        <button
            @click="handleLike"
            class="like-btn"
            aria-label="Like video"
        >
          ❤️
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  channel: {
    type: String,
    required: true
  },
  views: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['liked'])

const handleLike = () => {
  emit('liked')
}
</script>

<style scoped>
.video-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.video-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.thumbnail {
  width: 100%;
  height: 180px;
  object-fit: cover;
  background: #e0e0e0;
}

.video-info {
  padding: 12px;
}

.video-title {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #0f0f0f;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
}

.video-channel {
  font-size: 13px;
  color: #606060;
  margin-bottom: 4px;
}

.video-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
}

.video-views {
  font-size: 13px;
  color: #606060;
}

.like-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  transition: transform 0.2s;
  padding: 4px;
}

.like-btn:hover {
  transform: scale(1.2);
}
</style>