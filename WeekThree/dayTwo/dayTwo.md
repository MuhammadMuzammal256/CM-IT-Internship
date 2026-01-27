
    /* Basic CSS */
    body {
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
      margin: 0;
      padding: 0;
    }

    header, footer {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
    }

    nav {
      background-color: #555;
      padding: 10px;
      text-align: center;
    }

    nav a {
      color: white;
      margin: 0 15px;
      text-decoration: none;
    }

    main {
      display: flex;          /* Flexbox */
      flex-direction: row;    /* Items in row */
      justify-content: space-around; /* space between items */
      align-items: flex-start;
      padding: 20px;
    }

    section {
      background-color: white;
      padding: 20px;   /* spacing inside */
      margin: 10px;    /* spacing outside */
      flex: 1;         /* equal width */
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    footer p {
      margin: 0;
    }
  </style>
</head>
<body>

  <!-- Semantic header -->
  <header>
    <h1>My Website</h1>
  </header>

  <!-- Navigation bar -->
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>

  <!-- Main content area -->
  <main>
    <section>
      <h2>Section 1</h2>
      <p>This is the first section of content.</p>
    </section>

    <section>
      <h2>Section 2</h2>
      <p>This is the second section of content.</p>
    </section>

    <section>
      <h2>Section 3</h2>
      <p>This is the third section of content.</p>
    </section>
  </main>

  <!-- Footer -->
  <footer>
    <p>&copy; 2026 My Website</p>
  </footer>
