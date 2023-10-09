<script>
import Card from "../components/Card.svelte";
const availableCards = [1,3,5,7,10,20,40,100,'coffee', 'slough','?']
</script>


<div class="flex flex-1 flex-wrap gap-4 mt-6 justify-center">
    {#each availableCards as cardValue }

<Card value={cardValue} />
        {/each}
</div>
