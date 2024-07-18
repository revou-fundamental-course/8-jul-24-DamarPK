// Function to calculate BMI
function calculateBMI() {
    // Get input values
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;

    // Validate input
    if (!weight || !height || weight <= 0 || height <= 0) {
        alert('Silakan masukkan berat dan tinggi badan yang valid.');
        return;
    }

    // Calculate BMI
    const bmi = weight / (height * height);
    let bmiCategory = '';

    // Determine BMI category
    if (bmi < 18.5) {
        bmiCategory = 'Kekurangan berat badan';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = 'Normal (ideal)';
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        bmiCategory = 'Kelebihan berat badan';
    } else {
        bmiCategory = 'Obesitas';
    }

    // Display the result
    const result = `Jenis Kelamin: ${gender === 'male' ? 'Laki-laki' : 'Perempuan'}<br>
                    BMI: ${bmi.toFixed(2)}<br>
                    Kategori: ${bmiCategory}`;
    document.getElementById('result').innerHTML = result;
}
