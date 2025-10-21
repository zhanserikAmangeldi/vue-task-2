<template>
  <div class="app">
    <header>
      <h1>Mini YouTube Dashboard</h1>

      <div class="search-bar">
        <input
            v-model="searchQuery"
            type="text"
            placeholder="Search videos by title or channel..."
        />
      </div>

      <div class="counter">
        Found {{ videosCount }} {{ videosCount === 1 ? 'video' : 'videos' }}
      </div>

      <div class="total-likes">
        Total Likes: {{ totalLikes }} ❤️
      </div>
    </header>

    <div v-if="loading" class="loading">
      Loading videos...
    </div>

    <div v-else-if="filteredVideos.length === 0" class="empty-state">
      No videos found.
    </div>

    <div v-else class="video-grid">
      <VideoCard
          v-for="video in filteredVideos"
          :key="video.id"
          :title="video.title"
          :channel="video.channel"
          :views="video.views"
          :thumbnail="video.thumbnail"
          @liked="handleLike"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import VideoCard from './components/VideoCard.vue'
import useVideos from './composables/useVideos.js'

const {
  searchQuery,
  totalLikes,
  loading,
  filteredVideos,
  handleLike
} = useVideos()

const videosCount = computed(() => filteredVideos.value.length)

watch(searchQuery, (newValue) => {
  console.log('Search query changed to:', newValue)
})
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

header {
  margin-bottom: 30px;
}

h1 {
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 20px;
  color: #0f0f0f;
}

.search-bar {
  margin-bottom: 15px;
}

input[type="text"] {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 24px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

input[type="text"]:focus {
  border-color: #065fd4;
}

.counter {
  font-size: 14px;
  color: #606060;
  margin-bottom: 5px;
}

.total-likes {
  font-size: 14px;
  color: #606060;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #606060;
  font-size: 16px;
}

.loading {
  text-align: center;
  padding: 60px 20px;
  color: #606060;
  font-size: 16px;
}
</style>