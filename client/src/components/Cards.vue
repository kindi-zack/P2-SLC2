<template>
  <div class="col-4">
                <div class="card mx-auto my-2" style="width: 12rem;">
                <img :src="inventory.img" class="card-img-top" alt="...">
                <div class="card-body card-body ">
                    <h5 class="card-title" v-text="inventory.name"></h5>
                    <p class="card-text">Quantity: {{ inventory.price }}</p>
                    <p class="card-text">Status: {{ inventory.status }}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
                </div>
            </div>
</template>

<script>
export default {
  props: ['inventory']
}
</script>

<style>

</style>
