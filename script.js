function showVirusCheckForm() {
    document.getElementById('virusCheckSection').style.display = 'block';
    document.getElementById('commentsSection').style.display = 'none';
}

function showComments() {
    document.getElementById('virusCheckSection').style.display = 'none';
    document.getElementById('commentsSection').style.display = 'block';
    loadComments();
}

function checkForViruses() {
    // Implement virus checking logic here
    alert('Virus check complete!');
}

function addComment() {
    var commentText = document.getElementById('comment').value;
    if (commentText.trim() !== '') {
        var commentList = document.getElementById('commentList');
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerText = commentText;
        commentList.appendChild(commentDiv);
        document.getElementById('comment').value = '';
    } else {
        alert('Please enter a comment.');
    }
}

function loadComments() {
    // In a real scenario, you would fetch comments from a server here
    // For simplicity, let's add some dummy comments
    var commentList = document.getElementById('commentList');
    commentList.innerHTML = '';
    var dummyComments = ["K GROUP is a great website!", "virus tracked!"];
    dummyComments.forEach(function (commentText) {
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerText = commentText;
        commentList.appendChild(commentDiv);
    });
}

function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform your login validation here
    // For simplicity, let's check if both fields are filled
    if (username !== '' && password !== '') {
        alert('Login successful!');
    } else {
        alert('Please enter both username and password.');
    }
}

function registerUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform your registration logic here
    // For simplicity, let's display an alert
    alert('Registration successful!');
}
