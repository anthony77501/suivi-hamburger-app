// Prix des hamburgers en yens
const prixCheese = 800;
const prixAvocadoCheese = 800;
const prixHawaiian = 800;

// Variables pour stocker les quantités de chaque type de hamburger
let totalCheese = 0;
let totalAvocadoCheese = 0;
let totalHawaiian = 0;

// Variables pour le nombre de suppléments demandés
let cheeseExtra = 0;
let avocadoCheeseExtra = 0;
let avocadoExtra = 0;

// Fonction pour ajouter une commande
function addOrder(type) {
    let qty = parseInt(prompt("注文数を入力してください (Entrez le nombre de hamburgers) :")) || 0;

    // Vérification que l'entrée est un nombre valide
    if (qty > 0) {
        if (type === 'cheese') {
            // Incrémenter le nombre de hamburgers pour le type Cheese
            totalCheese += qty;
            
            // Demande combien de hamburgers ont un supplément de fromage
            let cheeseExtraQty = parseInt(prompt("チーズ追加する数を入力してください (Nombre de hamburgers avec supplément de fromage) :")) || 0;
            if (cheeseExtraQty > 0 && cheeseExtraQty <= qty) {
                cheeseExtra += cheeseExtraQty;
            } else if (cheeseExtraQty > qty) {
                alert("数が注文数を超えています。 (Le nombre de suppléments dépasse le nombre de hamburgers commandés.)");
            }
        } else if (type === 'avocadoCheese') {
            // Incrémenter le nombre de hamburgers pour le type Avocado Cheese
            totalAvocadoCheese += qty;

            // Demande combien de hamburgers ont un supplément de fromage
            let avocadoCheeseExtraQty = parseInt(prompt("チーズ追加する数を入力してください (Nombre de hamburgers avec supplément de fromage) :")) || 0;
            if (avocadoCheeseExtraQty > 0 && avocadoCheeseExtraQty <= qty) {
                avocadoCheeseExtra += avocadoCheeseExtraQty;
            } else if (avocadoCheeseExtraQty > qty) {
                alert("数が注文数を超えています。 (Le nombre de suppléments dépasse le nombre de hamburgers commandés.)");
            }

            // Demande combien de hamburgers ont un supplément d'avocat
            let avocadoExtraQty = parseInt(prompt("アボカド追加する数を入力してください (Nombre de hamburgers avec supplément d'avocat) :")) || 0;
            if (avocadoExtraQty > 0 && avocadoExtraQty <= qty) {
                avocadoExtra += avocadoExtraQty;
            } else if (avocadoExtraQty > qty) {
                alert("数が注文数を超えています。 (Le nombre de suppléments dépasse le nombre de hamburgers commandés.)");
            }
        } else if (type === 'hawaiian') {
            // Incrémenter le nombre de hamburgers pour le type Hawaiian
            totalHawaiian += qty;
        }

        // Mettre à jour les totaux affichés
        updateTotals();
    } else {
        // Affiche un message d'erreur si l'entrée est invalide
        alert("有効な数を入力してください。 (Veuillez entrer un nombre valide.)");
    }
}

// Fonction pour mettre à jour les totaux
function updateTotals() {
    // Calcul du total des ventes
    const totalVentes = totalCheese + totalAvocadoCheese + totalHawaiian;

    // Calcul du revenu total
    const totalRevenu = (totalCheese * prixCheese) + (totalAvocadoCheese * prixAvocadoCheese) + (totalHawaiian * prixHawaiian);

    // Mise à jour des valeurs affichées
    document.getElementById("cheeseTotal").innerText = totalCheese;
    document.getElementById("avocadoCheeseTotal").innerText = totalAvocadoCheese;
    document.getElementById("hawaiianTotal").innerText = totalHawaiian;
    document.getElementById("totalVentes").innerText = totalVentes;
    document.getElementById("totalRevenu").innerText = totalRevenu.toFixed(2);

    // Mise à jour des extras
    document.getElementById("cheeseExtra").innerText = cheeseExtra;
    document.getElementById("avocadoCheeseExtra").innerText = avocadoCheeseExtra;
    document.getElementById("avocadoExtra").innerText = avocadoExtra;
}
