// Lista de DDDs do Brasil
const ddds = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 
    37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 
    65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 
    89, 91, 92, 93, 94, 95, 96, 97, 98, 99
];

// Função para adicionar os DDDs ao select
function populateDDDSelect() {
    const dddSelect = document.getElementById('ddd');
    ddds.forEach(ddd => {
        const option = document.createElement('option');
        option.value = ddd;
        option.textContent = ddd;
        dddSelect.appendChild(option);
    });
}

// Chama a função para popular o select quando a página carrega
document.addEventListener('DOMContentLoaded', populateDDDSelect);

function formatarTelefone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (value.length > 9) {
        value = value.slice(0, 9); // Limita o tamanho a 9 dígitos
    }

    if (value.length > 5) {
        value = value.replace(/^(\d{5})(\d{4})$/, '$1-$2'); // Formato 98765-4321
    } else if (value.length > 0) {
        value = value.replace(/^(\d+)$/, '$1'); // Formato 98765
    }

    input.value = value;
}
