<template>
  <!-- <div> -->
      <div class="col-4">
                <div class="card mx-auto my-2" style="width: 12rem;">
                <img :src="inventory.img" class="card-img-top" alt="...">
                <div class="card-body card-body ">
                    <h5 class="card-title">{{ inventory.name }}</h5>
                    <p class="card-text">Quantity: {{inventory.quantity}}</p>
                    <p class="card-text">Status: {{inventory.status}}</p>
                    <p class="card-text">Price: {{inventory.price}}</p>
                    <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                </div>
                </div>
                <!-- <h1>{{ inventories }}</h1> -->
            </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ['inventory']
}
</script>

<style>

</style>
