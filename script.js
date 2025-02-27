// Vous pouvez ajouter des fonctionnalités JavaScript ici si nécessaire
// Par exemple, pour gérer la soumission du formulaire de recherche

document.querySelector('.search-bar button').addEventListener('click', function () {
    const searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery) {
        alert(`Recherche pour: ${searchQuery}`);
        // Vous pouvez rediriger l'utilisateur vers une page de résultats de recherche ici
    } else {
        alert('Veuillez entrer un terme de recherche.');
    }
});

// Vous pouvez ajouter des fonctionnalités JavaScript ici si nécessaire
// Par exemple, pour gérer la soumission du formulaire de recherche

document.querySelector('.search-bar button').addEventListener('click', function () {
    const searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery) {
        alert(`Recherche pour: ${searchQuery}`);
        // Vous pouvez rediriger l'utilisateur vers une page de résultats de recherche ici
    } else {
        alert('Veuillez entrer un terme de recherche.');
    }
});
/// Données simulées pour les projets
const projects = [
    { id: 1, category: "bassine", name: "Bassine en inox", amount: 100, goal: "achieved" },
    { id: 2, category: "moulinex", name: "Moulinex multifonction", amount: 200, goal: "not_achieved" },
    { id: 3, category: "casserole", name: "Casserole antiadhésive", amount: 50, goal: "achieved" },
    { id: 4, category: "assiettes", name: "Assiettes en céramique", amount: 80, goal: "not_achieved" },
    { id: 5, category: "plats", name: "Plats à gratin", amount: 120, goal: "achieved" },
    
];


// Données simulées pour les fabricants
const manufacturers = [
    { id: 1, name: "Fabricant A", service: "Bassines en inox à petit prix" },
    { id: 2, name: "Fabricant B", service: "Casseroles antiadhésives de qualité" },
    { id: 3, name: "Fabricant C", service: "Assiettes en céramique durables" },
];

// Récupérer les éléments du DOM
const projectsList = document.getElementById('projectsList');
const manufacturersList = document.getElementById('manufacturersList');
const filterForm = document.getElementById('filterForm');

// Afficher les projets
function displayProjects(filteredProjects) {
    projectsList.innerHTML = ''; // Vider la liste actuelle
    filteredProjects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.name}</h3>
            <p><strong>Catégorie :</strong> ${project.category}</p>
            <p><strong>Montant recherché :</strong> ${project.amount} €</p>
            <p><strong>Objectif :</strong> ${project.goal === "achieved" ? "Atteint" : "Non atteint"}</p>
            <a href="details.html?id=${project.id}">Voir les détails</a>
        `;
        projectsList.appendChild(card);
    });
}

// Afficher les fabricants
function displayManufacturers() {
    manufacturers.forEach(manufacturer => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${manufacturer.name}</strong> : ${manufacturer.service}`;
        manufacturersList.appendChild(li);
    });
}

// Appliquer les filtres
filterForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const category = document.getElementById('category').value;
    const amount = parseInt(document.getElementById('amount').value) || 0;
    const goal = document.getElementById('goal').value;

    const filteredProjects = projects.filter(project => {
        return (category === "" || project.category === category) &&
               (project.amount >= amount) &&
               (goal === "" || project.goal === goal);
    });

    displayProjects(filteredProjects);
});

// Initialisation
displayProjects(projects); // Afficher tous les projets au chargement
displayManufacturers(); // Afficher les fabricants
// Afficher les contributions
function displayContributions() {
    const contributionsList = document.getElementById('contributionsList');
    contributionsList.innerHTML = ''; // Effacer la liste actuelle

    contributions.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.likes} likes`;
        contributionsList.appendChild(li);
    });
}

// Afficher les notifications
function displayNotifications() {
    const notificationsList = document.getElementById('notificationsList');
    notificationsList.innerHTML = ''; // Effacer la liste actuelle

    notifications.forEach(notification => {
        const li = document.createElement('li');
        li.textContent = notification;
        notificationsList.appendChild(li);
    });
}

// Gérer la mise à jour du profil
document.getElementById('profileForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le rechargement de la page

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simuler une mise à jour du profil
    alert(`Profil mis à jour :\nEmail: ${email}\nMot de passe: ${password}`);
});

// Gérer les contributions
document.getElementById('manageContributions').addEventListener('click', function () {
    alert("Redirection vers la page de gestion des contributions...");
});

// Afficher les données au chargement de la page
displayContributions();
displayNotifications();

// page d'accueil
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire

    // Réinitialiser les messages d'erreur
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Validation de l'email
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Veuillez entrer une adresse email valide.';
        return;
    }

    // Validation du mot de passe
    const password = document.getElementById('password').value;
    if (!validatePassword(password)) {
        document.getElementById('passwordError').textContent = 'Le mot de passe doit contenir au moins 8 caractères, dont des chiffres, des lettres majuscules/minuscules et des caractères spéciaux.';
        return;
    }

    // Confirmation du mot de passe
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Les mots de passe ne correspondent pas.';
        return;
    }

    // Si tout est valide, soumettre le formulaire
    alert('Formulaire soumis avec succès !');
    // Ici, vous pouvez ajouter une logique pour envoyer les données au serveur
});

// Fonction pour valider l'email
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Fonction pour valider le mot de passe
function validatePassword(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
}

// formulaire de paiement
document.getElementById('paymentForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher la soumission du formulaire

    // Récupérer les valeurs du formulaire
    const phoneNumber = document.getElementById('phoneNumber').value;
    const amount = document.getElementById('amount').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Valider les entrées
    if (!phoneNumber || !amount || !paymentMethod) {
        alert('Veuillez remplir tous les champs.');
        return;
    }

    // Simuler une requête API (remplacez par une vraie API)
    simulatePayment(phoneNumber, amount, paymentMethod);
});

function simulatePayment(phoneNumber, amount, paymentMethod) {
    console.log(`Paiement en cours via ${paymentMethod}...`);
    console.log(`Numéro: ${phoneNumber}, Montant: ${amount} FCFA`);

    // Simuler une réponse de l'API
    setTimeout(() => {
        const success = Math.random() > 0.5; // Simuler un succès ou un échec
        if (success) {
            alert('Paiement réussi !');
        } else {
            alert('Échec du paiement. Veuillez réessayer.');
        }
    }, 2000); // Simuler un délai de 2 secondes
}

async function processPayment(phoneNumber, amount, paymentMethod) {
    const apiKey = 'VOTRE_CLE_API';
    const endpoint = 'https://api.paydunya.com/v1/checkout-invoice/create';

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'API-Key': apiKey,
        },
        body: JSON.stringify({
            phone_number: phoneNumber,
            amount: amount,
            payment_method: paymentMethod,
        }),
    });

    const data = await response.json();
    if (data.success) {
        alert('Paiement réussi !');
    } else {
        alert('Échec du paiement : ' + data.message);
    }
}

document.getElementById("country").addEventListener("change", function () {
    let indicatif = this.value;
    document.getElementById("phone").value = indicatif + " ";
});
// Récupérer le formulaire
const contactForm = document.getElementById('contactForm');

// Gérer la soumission du formulaire
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher la soumission par défaut

    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const contact = document.getElementById('contact').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    // Valider les champs (exemple simple)
    if (!nom || !prenom || !contact || !email || !description) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    // Simuler l'envoi des données (remplacer par une requête API réelle)
    console.log("Données du formulaire :", { nom, prenom, contact, email, description });
    alert("Votre message a été envoyé avec succès !");

    // Réinitialiser le formulaire après envoi
    contactForm.reset();
});
// aide et FAQ
// Fonction pour afficher ou masquer la réponse
function toggleAnswer(question) {
    const answer = question.nextElementSibling;
    answer.classList.toggle('show');
}

// Ajouter un gestionnaire d'événement pour les boutons "Voir plus"
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Empêcher le comportement par défaut du lien
        const projectCard = button.closest('.project-card');
        const projectTitle = projectCard.querySelector('h3').textContent;
        alert(`Vous avez cliqué sur : ${projectTitle}`);
    });
});




