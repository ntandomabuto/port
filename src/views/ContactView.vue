<template>
    <div>
        <main class="container mx-auto px-6 py-8">
            <h2 class="text-3xl font-bold mb-6">
             Contact
            </h2>
            <section class="my-12" id="contact">
    <div class="contact-details">
                <h2 class="text-3xl font-bold mb-4">Get in Touch</h2>
                <p><i class="fas fa-phone"></i> +27 60 309 8353</p>
                <p><i class="fas fa-envelope"></i> Email: ntandomabuto@gmail.com</p>
                <p><i class="fas fa-map-marker-alt"></i>Philippi, Cape Town</p>
                <p>Western Cape, South Africa</p>
            </div>
            <div>
    <form class="bg-white p-6 rounded-lg shadow-lg" id="contact-form" action="https://formcarry.com/s/P-WfBRMqUZH"
  method="POST"
  enctype="multipart/form-data" target="_blank">
     <div class="mb-4">
      <label class="block text-gray-700" for="name">
       Name
      </label>
      <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" id="name" type="text"/>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700" for="email">
       Email
      </label>
      <input class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2" id="email" type="email"/>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700" for="message">
       Message
      </label>
      <textarea class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="message"></textarea>
     </div>
     <button class="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" type="submit">
      Send Message
     </button>
     <button class="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" type="reset">
      Reset
     </button>
    </form>
    </div>
   </section>
  </main>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .my-12{
        display: flex;
        justify-content: center;
    }
    .contact-details{
        padding: 120px;
        text-align: start;

    }
    p{
        padding: 5px;
    }
    button{
    margin: 5px;

    }
    button:hover{
        background-color: #40d317;
    }
</style>