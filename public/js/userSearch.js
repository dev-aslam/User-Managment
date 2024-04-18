function searchUsers() {
    console.log('clicked');
    const searchInput = document.getElementById('searchInput').value.trim().toLowerCase();
    const userRows = document.querySelectorAll('#userDetails tbody tr');
    console.log(userRows);
    userRows.forEach(row => {
        const fullName = row.cells[1].textContent.toLowerCase();
        const email = row.cells[2].textContent.toLowerCase();
        const mobileNo = row.cells[3].textContent.toLowerCase();

        if (fullName.includes(searchInput) || email.includes(searchInput) || mobileNo.includes(searchInput)) {
            row.style.display = ''; // Show row if matches search criteria
        } else {
            row.style.display = 'none'; // Hide row if no match
        }
    });
}