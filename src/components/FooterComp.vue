<template>
    <footer class="footer">
        <a href="https://www.linkedin.com/in/ntando-mabuto-127a72316/" target="_blank"><i class="fab fa-linkedin fa-xl" aria-hidden="true" style="color:#40d317"></i></a>
        <a href="https://github.com/ntandomabuto" target="_blank"><i class="fa-brands fa-github fa-xl" style="color: #40d317;"></i></a>
        <div class="footer-container container">
    <p>Designed and developed by <b>Ntando Mabuto</b></p>
    Copyright ©{{ year }}. All Rights Reserved
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>
<style scoped>
    .footer-container{
        display: flex;
        justify-content: space-between;
    }
    a i{
        width: 50px;
        /* text-shadow: 1px 3px 1px black; */
    }
</style>