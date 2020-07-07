<template>
  <div class="home">
    <TestEchart style="width: 100%;height: 500px"></TestEchart>
  </div>
</template>

<script>
// @ is an alias to /src
import TestEchart from './components/testEchart'
export default {
  name: 'Home',
  components: {
    TestEchart
  }
}
</script>
