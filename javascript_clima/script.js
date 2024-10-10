
function fetchFeriados(){
    
    fetch('https://api.boostr.cl/holidays')
        .then(response => {
         
            
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            
            const tableBody = document.querySelector('#feriadosTable tbody');
        
            tableBody.innerHTML = ''; // Limpiar tabla antes de agregar nuevos datos
            
            // Verificar si hay datos y procesarlos
            if (data.data && Array.isArray(data.data)) {
                data.data.forEach(holiday => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${holiday.date|| 'N/A'}</td>
                        <td>${holiday.title || 'N/A'}</td>
                        <td>${holiday.type || 'N/A'}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                const row = document.createElement('tr');
                row.innerHTML = `<td colspan="3">No se encontraron días feriados.</td>`;
                tableBody.appendChild(row);
            }
        })
        .catch(error => console.error('Error al cargar los feriados:', error));

}
