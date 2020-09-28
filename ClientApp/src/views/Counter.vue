<template>
  <div>
    <h1>Counter</h1>
    <p>This is a simple example of a React component.</p>
    <p aria-live="polite">
      Current count: <strong>{{ count }}</strong>
    </p>
    <button class="btn btn-primary" @click="count++">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0
    }
  }
}
</script>