<script>
  document.querySelectorAll('input[name="radio-btn"]').forEach((radio, i) => {
    radio.addEventListener('change', () => {
      document.querySelector('.auto-btn' + (i + 1)).checked = true;
    });
  });
</script>