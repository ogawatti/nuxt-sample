<template>
  <div class="container">
    <div>
      <h1 class="title">Sample Form</h1>
      <form name="contact" :action="$config.formEndpoint" method="POST">
        <p>
          <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Subject: <input type="text" name="_subject" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>
        <p>
          <label>Message2: <textarea name="message2"></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
}
</script>