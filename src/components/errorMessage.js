import Swal from 'sweetalert2';

export const errorMessage = message => {
  Swal.fire({
    position: 'center',
    icon: 'warning',
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
