document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio của Đức đã load xong!');

    if (!sessionStorage.getItem('daChaoHoi')) {
        
        alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
        
        sessionStorage.setItem('daChaoHoi', 'true');
    }
});