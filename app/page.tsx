import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ChevronRight, Leaf, ShieldCheck, Utensils } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold">Healthy Menu</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline">
              الرئيسية
            </Link>
            <Link href="#packages" className="text-sm font-medium hover:underline">
              الباقات
            </Link>
            <Link href="#meals" className="text-sm font-medium hover:underline">
              الوجبات
            </Link>
            <Link href="/subscribe" className="text-sm font-medium hover:underline">
              اشترك الآن
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline">
              عن الشركة
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild>
              <Link href="/subscribe">تسجيل الاشتراك</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              وجبات صحية طازجة توصل إلى باب منزلك
            </h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              استمتع بوجبات صحية ولذيذة مُعدة من قبل طهاة محترفين وموصلة إلى منزلك يومياً
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <Link href="/subscribe">
                  ابدأ الآن <ChevronRight className="mr-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                تعرف على المزيد
              </Button>
            </div>
          </div>
        </section>

        <section id="packages" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  باقاتنا الشهرية
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  اختر الباقة المناسبة لاحتياجاتك
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  باقات متنوعة تناسب جميع الاحتياجات والميزانيات
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">الباقة الأساسية</CardTitle>
                  <CardDescription>مناسبة للمبتدئين</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    60 د.ب <span className="text-sm font-normal text-gray-500">/شهرياً</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-right">
                    <li className="flex items-center justify-end">
                      <span>وجبة واحدة يومياً (5 أيام في الأسبوع)</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>3 خيارات للاختيار منها يومياً</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>توصيل مجاني</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/subscribe?package=basic">اشترك الآن</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col border-green-600">
                <CardHeader className="bg-green-50">
                  <div className="py-1 px-3 text-xs bg-green-600 text-white rounded-full w-fit mx-auto mb-2">
                    الأكثر شعبية
                  </div>
                  <CardTitle className="text-xl">الباقة المتوسطة</CardTitle>
                  <CardDescription>للباحثين عن التوازن</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    110 د.ب <span className="text-sm font-normal text-gray-500">/شهرياً</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-right">
                    <li className="flex items-center justify-end">
                      <span>وجبتان يومياً (5 أيام في الأسبوع)</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>5 خيارات للاختيار منها يومياً</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>وجبة خفيفة يومية</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>توصيل مجاني</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/subscribe?package=medium">اشترك الآن</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">الباقة المتكاملة</CardTitle>
                  <CardDescription>للباحثين عن أسلوب حياة صحي كامل</CardDescription>
                  <div className="mt-4 text-4xl font-bold">
                    160 د.ب <span className="text-sm font-normal text-gray-500">/شهرياً</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2 text-right">
                    <li className="flex items-center justify-end">
                      <span>ثلاث وجبات يومياً (7 أيام في الأسبوع)</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>جميع الخيارات متاحة</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>وجبتان خفيفتان يومياً</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>استشارة تغذية شهرية</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                    <li className="flex items-center justify-end">
                      <span>توصيل مجاني</span>
                      <Check className="mr-2 h-4 w-4 text-green-600" />
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/subscribe?package=premium">اشترك الآن</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="meals" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">وجباتنا المميزة</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  وجبات صحية ولذيذة معدة من أفضل المكونات الطازجة
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/quinoa-salad.png"
                    alt="سلطة الكينوا مع الخضروات"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>سلطة الكينوا مع الخضروات</CardTitle>
                  <CardDescription>سلطة غنية بالبروتين والألياف</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">كينوا، خضروات موسمية، أفوكادو، صلصة الليمون والزيتون</p>
                  <div className="mt-4 text-xl font-bold text-green-600">4.5 د.ب</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/meals/quinoa-salad">عرض التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/grilled-chicken.png"
                    alt="دجاج مشوي مع الخضروات"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>دجاج مشوي مع الخضروات</CardTitle>
                  <CardDescription>وجبة متوازنة غنية بالبروتين</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">صدر دجاج مشوي، خضروات مشوية، بطاطا حلوة، صلصة الأعشاب</p>
                  <div className="mt-4 text-xl font-bold text-green-600">5.8 د.ب</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/meals/grilled-chicken">عرض التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/salmon-bowl.png"
                    alt="بوكة السلمون مع الأرز البني"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>بوكة السلمون مع الأرز البني</CardTitle>
                  <CardDescription>غني بأوميغا 3 والبروتين</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">سلمون طازج، أرز بني، خضروات مشكلة، صلصة الليمون</p>
                  <div className="mt-4 text-xl font-bold text-green-600">6.5 د.ب</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/meals/salmon-bowl">عرض التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/tofu-bowl.png"
                    alt="بوكة التوفو مع الخضروات"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>بوكة التوفو مع الخضروات</CardTitle>
                  <CardDescription>خيار نباتي غني بالبروتين</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">توفو متبل، خضروات مشكلة، كينوا، صلصة الصويا</p>
                  <div className="mt-4 text-xl font-bold text-green-600">4.2 د.ب</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/meals/tofu-bowl">عرض التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/lentil-soup.png"
                    alt="شوربة العدس"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>شوربة العدس</CardTitle>
                  <CardDescription>غنية بالألياف والبروتين النباتي</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">عدس، خضروات، توابل، خبز محمص</p>
                  <div className="mt-4 text-xl font-bold text-green-600">3.2 د.ب</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/meals/lentil-soup">عرض التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/images/fruit-salad.png"
                    alt="سلطة فواكه موسمية"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>سلطة فواكه موسمية</CardTitle>
                  <CardDescription>وجبة خفيفة منعشة وصحية</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">فواكه موسمية طازجة، عسل، مكسرات</p>
                  <div className="mt-4 text-xl font-bold text-green-600">3.5 د.ب</div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/meals/fruit-salad">عرض التفاصيل</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    لماذا تختار Healthy Menu؟
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    نحن نقدم وجبات صحية ولذيذة مصممة لتناسب احتياجاتك وأهدافك الصحية
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center shadow-sm">
                    <Utensils className="h-12 w-12 text-green-600" />
                    <h3 className="text-xl font-bold">طعام طازج ولذيذ</h3>
                    <p className="text-gray-500">نستخدم فقط أفضل المكونات الطازجة والموسمية لضمان جودة وطعم وجباتنا</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center shadow-sm">
                    <ShieldCheck className="h-12 w-12 text-green-600" />
                    <h3 className="text-xl font-bold">جودة وسلامة عالية</h3>
                    <p className="text-gray-500">نلتزم بأعلى معايير السلامة الغذائية في تحضير وتوصيل وجباتنا</p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center shadow-sm">
                    <Leaf className="h-12 w-12 text-green-600" />
                    <h3 className="text-xl font-bold">خيارات متنوعة</h3>
                    <p className="text-gray-500">
                      نقدم مجموعة متنوعة من الوجبات لتناسب جميع الأذواق والاحتياجات الغذائية
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-6 text-center shadow-sm">
                    <Check className="h-12 w-12 text-green-600" />
                    <h3 className="text-xl font-bold">توصيل مريح</h3>
                    <p className="text-gray-500">نوصل وجباتك إلى باب منزلك في الوقت المناسب وبحالة ممتازة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">ابدأ رحلتك الصحية اليوم</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  اشترك الآن واحصل على خصم 10% على أول شهر
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg" asChild>
                  <Link href="/subscribe">اشترك الآن</Link>
                </Button>
                <p className="text-xs text-gray-500">أو اتصل بنا على 17123456+ للمزيد من المعلومات</p>
              </div>
            </div>
          </div>
        </section>
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
