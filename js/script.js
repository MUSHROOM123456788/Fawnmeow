body {
    margin: 0;
    padding: 0;
    background-color: #ffcce0; /* soft baby pink */
    font-family: 'Times New Roman', serif;
    overflow: hidden;
    position: relative;
}

/* --- Title --- */
h1 {
    text-align: center;
    color: white;
    font-family: 'Times New Roman', serif;
    font-size: 20px;
    margin: 20px 0;
}

/* --- Photo Grid --- */
.photo-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin: 30px 0;
}

.photo-box {
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid #333;
    font-weight: bold;
    font-size: 18px;
    color: black;
}

/* Sizes */
.small { width: 100px; height: 100px; }
.medium { width: 150px; height: 150px; }
.large { width: 200px; height: 200px; }

/* --- Circular Emoji Container --- */
.emoji-circle {
    position: fixed;
    top: 0; left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 10;
}

/* --- Button --- */
.next-page-btn {
    display: block;
    margin: 30px auto;
    font-size: 60px;
    cursor: pointer;
    background: none;
    border: none;
}
