function showModal(id) {
	const modalWindow = document.getElementById(id);
	const successModal = document.getElementById('modal_success');
	modalWindow.classList.add('modal_active');
	const closeModal = document.getElementsByClassName('modal__close');
	console.log(closeModal)
	closeModal[0].onclick = function (){
		modalWindow.classList.remove('modal_active');
	}
	closeModal[1].onclick = function () {
		modalWindow.classList.remove('modal_active');
		successModal.classList.add('modal_active');
	}
	closeModal[2].onclick = function () {
		successModal.classList.remove('modal_active');
	}


}

showModal('modal_main');