import { ref, computed, onMounted } from 'vue'

export default function useVideos() {
    const videos = ref([])
    const searchQuery = ref('')
    const totalLikes = ref(0)
    const loading = ref(true)

    const mockVideos = [
        {
            id: 1,
            title: 'THEBESTVIDEO',
            channel: 'First Channel',
            views: '125K',
            thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop'
        },
        {
            id: 2,
            title: 'TOTOTOTOTO',
            channel: 'Second Channel',
            views: '89K',
            thumbnail: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=225&fit=crop'
        },
        {
            id: 3,
            title: 'KUKUKU',
            channel: 'Third Channel',
            views: '234K',
            thumbnail: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&h=225&fit=crop'
        },
        {
            id: 4,
            title: 'PPPPPP',
            channel: 'Fifth Channel',
            views: '156K',
            thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=225&fit=crop'
        },
        {
            id: 5,
            title: 'ZHzhzhzh',
            channel: 'Six Channel',
            views: '78K',
            thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop'
        },
        {
            id: 6,
            title: 'let\'s go',
            channel: 'Seven Channel',
            views: '92K',
            thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop'
        }
    ]

    const filteredVideos = computed(() => {
        if (!searchQuery.value.trim()) {
            return videos.value
        }

        const query = searchQuery.value.toLowerCase()
        return videos.value.filter(video =>
            video.title.toLowerCase().includes(query) ||
            video.channel.toLowerCase().includes(query)
        )
    })

    const handleLike = () => {
        totalLikes.value++
    }

    onMounted(() => {
        setTimeout(() => {
            videos.value = mockVideos
            loading.value = false
        }, 1500)
    })

    return {
        videos,
        searchQuery,
        totalLikes,
        loading,
        filteredVideos,
        handleLike
    }
}