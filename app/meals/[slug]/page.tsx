import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Clock, Leaf, ShieldCheck } from "lucide-react"

// قاعدة بيانات مبسطة للوجبات
const meals = {
  "quinoa-salad": {
    title: "سلطة الكينوا مع الخضروات",
    description: "سلطة غنية بالبروتين والألياف",
    image: "/images/quinoa-salad.png",
    price: 4.5,
    prepTime: "15 دقيقة",
    calories: 320,
    protein: 12,
    carbs: 45,
    fat: 14,
    ingredients: [
      "كوب من الكينوا المطبوخة",
      "خيار مقطع",
      "طماطم كرزية",
      "فلفل ملون",
      "أفوكادو",
      "بصل أحمر",
      "زيت زيتون",
      "عصير ليمون",
      "أعشاب طازجة (نعناع، بقدونس)",
      "ملح وفلفل حسب الرغبة",
    ],
    benefits: [
      "غنية بالبروتين النباتي",
      "مصدر ممتاز للألياف",
      "غنية بمضادات الأكسدة",
      "منخفضة السعرات الحرارية",
      "تساعد في الحفاظ على مستويات الطاقة",
    ],
    tags: ["نباتي", "خالي من الغلوتين", "غني بالبروتين"],
  },
  "grilled-chicken": {
    title: "دجاج مشوي مع الخضروات",
    description: "وجبة متوازنة غنية بالبروتين",
    image: "/images/grilled-chicken.png",
    price: 5.8,
    prepTime: "25 دقيقة",
    calories: 420,
    protein: 35,
    carbs: 30,
    fat: 18,
    ingredients: [
      "صدر دجاج (150 جرام)",
      "بطاطا حلوة",
      "جزر",
      "كوسة",
      "فلفل ملون",
      "زيت زيتون",
      "أعشاب (إكليل الجبل، زعتر)",
      "ثوم",
      "ليمون",
      "ملح وفلفل حسب الرغبة",
    ],
    benefits: [
      "غنية بالبروتين عالي الجودة",
      "مصدر جيد للفيتامينات والمعادن",
      "منخفضة الدهون المشبعة",
      "تساعد في بناء العضلات",
      "تعزز الشعور بالشبع",
    ],
    tags: ["غني بالبروتين", "قليل الكربوهيدرات", "صديق للرياضيين"],
  },
  "salmon-bowl": {
    title: "بوكة السلمون مع الأرز البني",
    description: "غني بأوميغا 3 والبروتين",
    image: "/images/salmon-bowl.png",
    price: 6.5,
    prepTime: "20 دقيقة",
    calories: 480,
    protein: 28,
    carbs: 50,
    fat: 22,
    ingredients: [
      "فيليه سلمون (120 جرام)",
      "أرز بني",
      "أفوكادو",
      "خيار",
      "جزر مبشور",
      "فجل",
      "بذور السمسم",
      "صلصة الصويا قليلة الصوديوم",
      "زيت السمسم",
      "عصير ليمون",
    ],
    benefits: [
      "غنية بأحماض أوميغا 3 الدهنية",
      "تدعم صحة القلب والدماغ",
      "مصدر ممتاز للبروتين",
      "غنية بالفيتامينات والمعادن",
      "تساعد في تقليل الالتهابات",
    ],
    tags: ["غني بأوميغا 3", "بروتين عالي الجودة", "صحة القلب"],
  },
  "tofu-bowl": {
    title: "بوكة التوفو مع الخضروات",
    description: "خيار نباتي غني بالبروتين",
    image: "/images/tofu-bowl.png",
    price: 4.2,
    prepTime: "15 دقيقة",
    calories: 350,
    protein: 18,
    carbs: 40,
    fat: 16,
    ingredients: [
      "توفو متبل (100 جرام)",
      "كينوا",
      "سبانخ",
      "فطر",
      "جزر",
      "بروكلي",
      "بصل أخضر",
      "صلصة الصويا",
      "زنجبيل",
      "ثوم",
    ],
    benefits: [
      "مصدر ممتاز للبروتين النباتي",
      "غنية بالكالسيوم والحديد",
      "منخفضة السعرات الحرارية",
      "تساعد في خفض الكوليسترول",
      "مناسبة للنباتيين",
    ],
    tags: ["نباتي", "خالي من منتجات الألبان", "غني بالبروتين النباتي"],
  },
  "lentil-soup": {
    title: "شوربة العدس",
    description: "غنية بالألياف والبروتين النباتي",
    image: "/images/lentil-soup.png",
    price: 3.2,
    prepTime: "30 دقيقة",
    calories: 280,
    protein: 15,
    carbs: 45,
    fat: 6,
    ingredients: ["عدس (كوب)", "بصل", "جزر", "كرفس", "ثوم", "طماطم", "كمون", "كزبرة", "زيت زيتون", "مرق خضار"],
    benefits: [
      "غنية بالألياف والبروتين النباتي",
      "تساعد في خفض الكوليسترول",
      "تدعم صحة الجهاز الهضمي",
      "منخفضة الدهون",
      "تساعد في استقرار مستويات السكر في الدم",
    ],
    tags: ["نباتي", "غني بالألياف", "منخفض الدهون"],
  },
  "fruit-salad": {
    title: "سلطة فواكه موسمية",
    description: "وجبة خفيفة منعشة وصحية",
    image: "/images/fruit-salad.png",
    price: 3.5,
    prepTime: "10 دقائق",
    calories: 180,
    protein: 3,
    carbs: 42,
    fat: 1,
    ingredients: ["تفاح", "موز", "برتقال", "فراولة", "عنب", "توت", "كيوي", "نعناع طازج", "عسل", "عصير ليمون"],
    benefits: [
      "غنية بالفيتامينات والمعادن",
      "مصدر ممتاز لمضادات الأكسدة",
      "تدعم جهاز المناعة",
      "تساعد في الترطيب",
      "منخفضة السعرات الحرارية",
    ],
    tags: ["نباتي", "خالي من الغلوتين", "منخفض السعرات"],
  },
}

export default function MealPage({ params }: { params: { slug: string } }) {
  const meal = meals[params.slug as keyof typeof meals]

  if (!meal) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">Healthy Menu</span>
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">العودة للرئيسية</span>
            </Link>
          </Button>
        </div>
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={meal.image || "/placeholder.svg"} alt={meal.title} fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-2">{meal.title}</h1>
                <p className="text-gray-500 mb-4">{meal.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">وقت التحضير: {meal.prepTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {meal.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-4 mb-6">
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-lg font-bold text-green-600">{meal.calories}</span>
                    <span className="text-xs text-gray-500">سعرة</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-lg font-bold text-green-600">{meal.protein}غ</span>
                    <span className="text-xs text-gray-500">بروتين</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-lg font-bold text-green-600">{meal.carbs}غ</span>
                    <span className="text-xs text-gray-500">كربوهيدرات</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-lg font-bold text-green-600">{meal.fat}غ</span>
                    <span className="text-xs text-gray-500">دهون</span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-2xl font-bold text-green-600 mb-4">{meal.price} د.ب</div>
                <div className="flex gap-4">
                  <Button className="flex-1 bg-green-600 hover:bg-green-700" asChild>
                    <Link href={`/subscribe?meal=${params.slug}`}>اطلب الآن</Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link href="/#meals">عودة للوجبات</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">المكونات</h2>
                <ul className="space-y-2 text-right">
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center justify-end">
                      <span>{ingredient}</span>
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">الفوائد الصحية</h2>
                <ul className="space-y-2 text-right">
                  {meal.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center justify-end">
                      <span>{benefit}</span>
                      <ShieldCheck className="h-4 w-4 text-green-600 mr-2" />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6">وجبات مشابهة قد تعجبك</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(meals)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 4)
                .map(([slug, relatedMeal]) => (
                  <Card key={slug} className="overflow-hidden">
                    <div className="aspect-video relative">
                      <Image
                        src={relatedMeal.image || "/placeholder.svg"}
                        alt={relatedMeal.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium mb-1">{relatedMeal.title}</h3>
                      <p className="text-sm text-gray-500 mb-2">{relatedMeal.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-green-600">{relatedMeal.price} د.ب</span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/meals/${slug}`}>عرض التفاصيل</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2025 Healthy Menu. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              سياسة الخصوصية
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
