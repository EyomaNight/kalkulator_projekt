'use client';

export default function FitnessTips() {
  const tips = [
    {
      id: 1,
      category: 'Odchudzanie',
      title: 'Zwiększ spożycie białka',
      description: 'Białko zwiększa uczucie sytości i przyspieszą metabolizm. Staraj się spożyć 1.6-2.2g białka na kg wagi ciała.',
      icon: '🥩',
    },
    {
      id: 2,
      category: 'Odchudzanie',
      title: 'Regularna aktywność fizyczna',
      description: 'Połączenie treningu siłowego i cardio to idealna kombinacja do szybkiej utraty wagi. Trenuj 4-5 dni w tygodniu.',
      icon: '💪',
    },
    {
      id: 3,
      category: 'Budowa masy',
      title: 'Spożywaj nadmiar kalorii',
      description: 'Aby zbudować mięśnie, potrzebujesz być w lekkim nadmiarze kalorii (200-500 kcal ponad TDEE).',
      icon: '🍕',
    },
    {
      id: 4,
      category: 'Budowa masy',
      title: 'Progresja w treningach',
      description: 'Systematycznie zwiększaj ciężary i liczbę powtórzeń. To klucz do hipertrofii mięśniowej.',
      icon: '📈',
    },
    {
      id: 5,
      category: 'Ogólne',
      title: 'Dostateczna ilość snu',
      description: 'Śpij 7-9 godzin dziennie. Sen wpływa na hormonalne procesy w twoim organizmie i regenerację mięśni.',
      icon: '😴',
    },
    {
      id: 6,
      category: 'Ogólne',
      title: 'Pij dużo wody',
      description: 'Woda wspomaga metabolizm i transport nutrientów. Pij minimum 2-3 litry dziennie.',
      icon: '💧',
    },
  ];

  const categories = ['Odchudzanie', 'Budowa masy', 'Ogólne'];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Porady Fitness 💡</h2>

      {categories.map((category) => (
        <div key={category} className="mb-8">
          <h3 className="text-xl font-bold text-gray-700 mb-4 pb-2 border-b-2 border-indigo-500">
            {category}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips
              .filter((tip) => tip.category === category)
              .map((tip) => (
                <div key={tip.id} className="bg-gradient-to-br from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-200 hover:shadow-md transition">
                  <div className="text-3xl mb-2">{tip.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{tip.title}</h4>
                  <p className="text-sm text-gray-700">{tip.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
