const X = 5500; // faturamento do mês
const F12 = 7 * 1518 + 2135.57 + 3 * 2520; // folha acumulada nos últimos 12 meses
const RB12 = 916.66 + 1160.39 + 3 * 5500 + 7 * 9000; // receita acumulada 12 meses
const SM = 1518; // salário mínimo atual

function calcularSalarioReal(X, F12, RB12, SM) {
	// 1. Pró-labore mínimo
	const proLaboreMinimo = SM;

	// 2. Verificar Fator R com pró-labore mínimo
	const F12_tentativa = F12 + proLaboreMinimo;
	const fatorR_tentativa = F12_tentativa / RB12;

	let proLabore;

	if (fatorR_tentativa >= 0.28) {
		// Mínimo já é suficiente
		proLabore = proLaboreMinimo;
	} else {
		// 3. Calcular pró-labore necessário para atingir Fator R
		const proLaboreNecessario = 0.28 * RB12 - F12;
		proLabore = Math.max(proLaboreMinimo, proLaboreNecessario);
	}

	// 4. Calcular INSS (11% do pró-labore)
	const INSS = proLabore * 0.11;

	// 5. Custos fixos
	const agilize = 149;
	const pjHero = 95.21;
	const alimentacao = 500;
	const combustivel = 200;

	// 6. Imposto simplificado (aprox. 6% do faturamento)
	const imposto = X * 0.06;

	// 7. Salário líquido real
	const salarioReal = X - imposto - INSS - agilize - pjHero - alimentacao - combustivel;

	return {
		salarioReal,
		proLabore,
		INSS,
		fatorR: (F12 + proLabore) / RB12,
	};
}

const resultado = calcularSalarioReal(X, F12, RB12, SM);

console.log(resultado);
