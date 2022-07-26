<template>
  <div>
    <div class="grid grid-cols-1 lg:grid-cols-3">
        <div v-if = "items.error" />
        <div v-else-if = "items.pending" />
        <div v-else v-for="report in items.data" :key="report.n">
            <span>{{report.n}}</span>
            <span>{{report.p}}</span>
            <span>{{report.c}}</span>
            <span>{{Date(report.t)}}</span>
        </div>
    </div>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "dashboard",
});

const items = useFetch({
    url: "http://localhost:8000/reports/all",
    method: "GET",
    headers: { contentType: "application/json" },
  });
  console.log(items)
</script>
