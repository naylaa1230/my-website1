"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, ArrowLeft } from "lucide-react"

export default function SubscribePage() {
  const searchParams = useSearchParams()
  const defaultPackage = searchParams.get("package") || "basic"

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    area: "",
    package: defaultPackage,
    paymentMethod: "credit-card",
    dietaryRestrictions: "",
    deliveryTime: "morning",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    alert("تم إرسال طلب الاشتراك بنجاح! سنتواصل معك قريباً.")
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
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">اشترك الآن</h1>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              املأ النموذج أدناه للاشتراك في باقاتنا الصحية
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>معلومات الاشتراك</CardTitle>
                  <CardDescription>يرجى تعبئة جميع الحقول المطلوبة</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">المعلومات الشخصية</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">الاسم الكامل</Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">البريد الإلكتروني</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">رقم الهاتف</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="area">المنطقة</Label>
                        <Select value={formData.area} onValueChange={(value) => handleSelectChange("area", value)}>
                          <SelectTrigger id="area">
                            <SelectValue placeholder="اختر المنطقة" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="manama">المنامة</SelectItem>
                            <SelectItem value="muharraq">المحرق</SelectItem>
                            <SelectItem value="riffa">الرفاع</SelectItem>
                            <SelectItem value="isa-town">مدينة عيسى</SelectItem>
                            <SelectItem value="hamad-town">مدينة حمد</SelectItem>
                            <SelectItem value="saar">سار</SelectItem>
                            <SelectItem value="other">منطقة أخرى</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">العنوان التفصيلي</Label>
                      <Textarea id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">اختيار الباقة</h3>
                    <RadioGroup
                      value={formData.package}
                      onValueChange={(value) => handleSelectChange("package", value)}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4">
                        <RadioGroupItem value="basic" id="basic" />
                        <div className="grid gap-1 mr-2">
                          <Label htmlFor="basic" className="font-medium">
                            الباقة الأساسية
                          </Label>
                          <p className="text-sm text-gray-500">60 د.ب شهرياً</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4 border-green-600 bg-green-50">
                        <RadioGroupItem value="medium" id="medium" />
                        <div className="grid gap-1 mr-2">
                          <Label htmlFor="medium" className="font-medium">
                            الباقة المتوسطة
                          </Label>
                          <p className="text-sm text-gray-500">110 د.ب شهرياً</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 space-x-reverse border rounded-lg p-4">
                        <RadioGroupItem value="premium" id="premium" />
                        <div className="grid gap-1 mr-2">
                          <Label htmlFor="premium" className="font-medium">
                            الباقة المتكاملة
                          </Label>
                          <p className="text-sm text-gray-500">160 د.ب شهرياً</p>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">تفضيلات التوصيل</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="deliveryTime">وقت التوصيل المفضل</Label>
                        <Select
                          value={formData.deliveryTime}
                          onValueChange={(value) => handleSelectChange("deliveryTime", value)}
                        >
                          <SelectTrigger id="deliveryTime">
                            <SelectValue placeholder="اختر وقت التوصيل" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">صباحاً (7-10)</SelectItem>
                            <SelectItem value="noon">ظهراً (11-2)</SelectItem>
                            <SelectItem value="evening">مساءً (3-7)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dietaryRestrictions">قيود غذائية أو حساسية</Label>
                        <Textarea
                          id="dietaryRestrictions"
                          name="dietaryRestrictions"
                          value={formData.dietaryRestrictions}
                          onChange={handleChange}
                          placeholder="مثال: حساسية من المكسرات، نباتي، إلخ..."
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">طريقة الدفع</h3>
                    <Tabs
                      value={formData.paymentMethod}
                      onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                    >
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="credit-card">بطاقة ائتمان</TabsTrigger>
                        <TabsTrigger value="benefit-pay">بنفت بي</TabsTrigger>
                        <TabsTrigger value="cash">نقداً عند التوصيل</TabsTrigger>
                      </TabsList>
                      <TabsContent value="credit-card" className="space-y-4 mt-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">رقم البطاقة</Label>
                            <Input id="cardNumber" placeholder="0000 0000 0000 0000" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">تاريخ الانتهاء</Label>
                              <Input id="expiryDate" placeholder="MM/YY" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" />
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="benefit-pay" className="space-y-4 mt-4">
                        <p className="text-sm text-gray-500">
                          سيتم تحويلك إلى تطبيق بنفت بي لإتمام عملية الدفع بعد تأكيد الطلب.
                        </p>
                      </TabsContent>
                      <TabsContent value="cash" className="space-y-4 mt-4">
                        <p className="text-sm text-gray-500">
                          يمكنك الدفع نقداً عند استلام أول وجبة. يرجى التأكد من توفر المبلغ المطلوب.
                        </p>
                      </TabsContent>
                    </Tabs>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    تأكيد الاشتراك
                  </Button>
                  <p className="text-xs text-gray-500">
                    بالضغط على "تأكيد الاشتراك"، أنت توافق على الشروط والأحكام وسياسة الخصوصية الخاصة بنا.
                  </p>
                </CardFooter>
              </Card>
            </form>
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
