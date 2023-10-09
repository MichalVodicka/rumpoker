<script lang="ts">
  export let value: number
  export let isActive: boolean
</script>

<div class="card rounded-lg bg-amber-100 border-b-blue-700 w-64 h-80" class:selectable="{isActive}">
    <div class="text-6xl">{value}</div>
</div>

<style>
    .card {
        display: grid;
        justify-content: center;
        align-content: center;
        border-bottom-width: 10px;
    }

    .selectable {
        cursor: pointer;
        transition: .3s ease transform,  .3s ease border-bottom-width;
    }
    .selectable:hover {
        transform: translate(2px, -10px);
    }
    .selectable:active {
        border-width: 2px;
        transform: translate(4px, 3px);
        transition: .1s ease transform;
    }

</style>
