import Image from "next/image";
import Link from 'next/link'; // Import the Link component
import { Button } from '@/components/ui/button';

export default function Home() {
  const breakfastDishes = [
    { name: "Pancakes", description: "Fluffy pancakes with syrup, butter, and a side of mixed berries", image: "/pancakes_breakfast.jpeg" },
    { name: "Omelette", description: "Cheese omelette with a side of avocado and toast", image: "/omlette_breakfast.jpeg" },
    { name: "Yogurt", description: "Yogurt with mixed granola and fruit", image: "/yogurt_breakfast.jpeg" }
  ];

  const lunchDishes = [
    { name: "Sandwich", description: "Turkey, bacon, cheese, and avocado sandwich", image: "/sandwich_lunch.jpeg" },
    { name: "Salad", description: "Fresh garden salad with vinaigrette", image: "/salad_lunch.jpeg" },
    { name: "Burger", description: "Beef burger with cheese, bacon and a side of fries", image: "/burger_lunch.jpeg" }
  ];

  const dinnerDishes = [
    { name: "Steak", description: "Grilled steak with a side of greens", image: "/steak_dinner.jpeg" },
    { name: "Sushi", description: "Sushi roll with shrimp, grab, and avocado", image: "/sushi_dinner.jpeg" },
    { name: "Pizza", description: "Meat lover pizza with pepperoni, salami, sausage, and bacon", image: "/pizza_dinner.jpeg" }
  ];

  const renderDishSection = (title: string, dishes: any[]) => (
    <div className="mb-12">
      <h2 className="mb-6 text-3xl font-bold text-center">{title}</h2>
      <div className="space-y-4">
        {dishes.map((dish, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow">
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-black">{dish.name}</span>
              <span className="text-gray-700">{dish.description}</span>
              <Link href="https://www.myfitnesspal.com/nutrition-facts-calories" passHref>
                <Button variant="outline">Recipe</Button>
              </Link>
            </div>
            <Image src={dish.image} alt={dish.name} width={100} height={100} className="rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="p-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Good Eats</h1>
      </div>
      <div className="max-w-4xl mx-auto">
        {renderDishSection("Breakfast", breakfastDishes)}
        {renderDishSection("Lunch", lunchDishes)}
        {renderDishSection("Dinner", dinnerDishes)}
      </div>
    </main>
  );
}
