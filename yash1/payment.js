const cardPaymentForm = document.getElementById('cardPaymentForm');
const upiPaymentForm = document.getElementById('upiPaymentForm');
const cardPaymentRadio = document.getElementById('cardPayment');
const upiPaymentRadio = document.getElementById('upiPayment');

cardPaymentRadio.addEventListener('change', function() {
  cardPaymentForm.style.display = 'block';
  upiPaymentForm.style.display = 'none';
});

upiPaymentRadio.addEventListener('change', function() {
  cardPaymentForm.style.display = 'none';
  upiPaymentForm.style.display = 'block';
});
