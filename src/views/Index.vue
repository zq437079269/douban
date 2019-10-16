<template>
  <div class="home">
   <List></List>

  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/Board/List.vue'

export default {
  name: 'index',
  components: {
    List
  }
}
</script>
