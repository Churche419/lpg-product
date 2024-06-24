<!-- AboutUs.vue -->
<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h2>About Our Online Store</h2>
        <p>
          Welcome to our online store! We aim to provide high-quality products
          and excellent customer service to shoppers from all around the world.
        </p><br>

        <h1>Team 1</h1>
        <li>Ajene George  <em>(team lead)</em></li>
        <li>Lemuel Abahi</li>
        <li>Anyebe Praise</li>
          <br>
        <p>
          We are students of the OTA(otukpo tech academy) for 2024 Batch 1<br>
          During our Bootcamp we learnt about html and css, which is building blocks of the web<br>
          we also learnt about Vue js , apowerful javascript framework<br>
          explored php, a server-side language for dynamic web development<br>
          discovered bootstrap, a popular framework for responsive design<br>
          </p>
          <h4>Beyond Code</h4>
          <p>we embraced a godly life , cultivating spiritual growth and values<br>
          our journey has been a transformative blend of technical skills and personal growth<br>
          weve gained a deeper connection with our spiritual self, and are excited to build up
           ourselfs by more leaning, and inspiring others along the way.<br>
           <emp>Thank you </emp>
          </p>
      </div>
      <h1>Team</h1>
      <div class="row">
      <div class="col-md-1">
        <img
          :src="'/images/devs.jpg'"
          class="img-fluid rounded"
          alt="About Us Image"
          width="40%"
        />
        <p>Ajene George</p>
      </div>
      <div class="col-md-1">
        <img
          :src="'/images/devs2.jpg'"
          class="img-fluid rounded"
          alt="About Us Image"
          width="40%"
        />
        <p>Lemuel Abahi</p>
      </div>
      
    </div>
    </div>
    <div class="col-md-1">
        <img
          :src="'/images/devs3.jpeg'"
          class="img-fluid rounded"
          alt="About Us Image"
          width="40%"
        />
        <p>Anyebe Praise</p>
      </div>
  </div>

</template>

<script>
export default {
  name: 'about',
  
}
</script>

<style scoped>

</style>
