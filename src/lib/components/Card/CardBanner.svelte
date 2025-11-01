<script lang="ts">
  export let src: string;
  export let alt: string = '';
  export let height: string = '140px';
  export let radius: string = '0';
</script>

<div style="width: 100%; overflow: hidden; border-radius: {radius};">
  <img
    {src}
    {alt}
    style="width: 100%; height: {height}; object-fit: cover; display: block;"
  />
</div>
