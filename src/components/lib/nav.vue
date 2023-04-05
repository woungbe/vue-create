<template>
  <div>
  <nav>
    <span v-for="item in routerLine" :key="item.name">
        <router-link :to="item.path">{{ item.name }}</router-link> |
    </span>
  </nav>

  </div>
</template>

<script>

import routes from '@/router/routes';

export default {
  name: 'headerNav',
  data() {
    return {};
  },
  methods: {},
  computed: {
    routerLine:function(){
        return routes;
    }
  },
}
</script>