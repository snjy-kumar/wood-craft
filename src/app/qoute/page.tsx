"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  address: z.string().optional(),
  projectType: z.string({
    required_error: "Please select a project type.",
  }),
  budget: z.string({
    required_error: "Please select a budget range.",
  }),
  timeline: z.string({
    required_error: "Please select a timeline.",
  }),
  description: z.string().min(10, {
    message: "Please provide at least a brief description of your project.",
  }),
  attachments: z.any().optional(),
  preferredContact: z.enum(["email", "phone", "either"], {
    required_error: "Please select your preferred contact method.",
  }),
  services: z.array(z.string()).refine((value) => value.length > 0, {
    message: "Please select at least one service.",
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
})

const services = [
  {
    id: "custom-furniture",
    label: "Custom Furniture",
  },
  {
    id: "kitchen-cabinetry",
    label: "Kitchen Cabinetry",
  },
  {
    id: "built-ins",
    label: "Built-ins & Shelving",
  },
  {
    id: "outdoor-structures",
    label: "Outdoor Structures",
  },
  {
    id: "commercial",
    label: "Commercial Projects",
  },
  {
    id: "restoration",
    label: "Furniture Restoration",
  },
]

export default function QuotePage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      description: "",
      services: [],
      termsAccepted: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      toast({
        title: "Quote request submitted!",
        description: "We'll get back to you within 1-2 business days.",
      })
    }, 1000)
  }

  if (isSubmitted) {
    return (
      <div className=" flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center md:px-6">
        <div className="mx-auto max-w-md">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-3">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>
          <h1 className="mb-4 font-serif text-3xl font-bold">Quote Request Received!</h1>
          <p className="mb-8 text-muted-foreground">
            Thank you for your interest in our services. We&apos;ve received your quote request and will review it promptly.
            A member of our team will contact you within 1-2 business days to discuss your project in detail.
          </p>
          <div className="space-y-4">
            <Button className="w-full bg-amber-700 hover:bg-amber-800" onClick={() => (window.location.href = "/")}>
              Return to Homepage
            </Button>
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-700 hover:bg-amber-700/10"
              onClick={() => (window.location.href = "/portfolio")}
            >
              Browse Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Request a Quote</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Fill out the form below with details about your project, and we&apos;ll get back to you with a custom quote within
          1-2 business days.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-semibold">Contact Information</h2>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Address (Optional)</FormLabel>
                            <FormControl>
                              <Input placeholder="City, State" {...field} />
                            </FormControl>
                            <FormDescription>
                              General location helps us determine if you&apos;re in our service area.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="preferredContact"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Preferred Contact Method</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex flex-wrap gap-4"
                            >
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="email" />
                                </FormControl>
                                <FormLabel className="font-normal">Email</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="phone" />
                                </FormControl>
                                <FormLabel className="font-normal">Phone</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-3 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="either" />
                                </FormControl>
                                <FormLabel className="font-normal">Either</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-semibold">Project Details</h2>

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select project type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="custom-furniture">Custom Furniture</SelectItem>
                              <SelectItem value="home-renovation">Home Renovation</SelectItem>
                              <SelectItem value="commercial">Commercial Project</SelectItem>
                              <SelectItem value="outdoor">Outdoor Structure</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="services"
                      render={() => (
                        <FormItem>
                          <div className="mb-4">
                            <FormLabel>Services Needed</FormLabel>
                            <FormDescription>Select all that apply to your project.</FormDescription>
                          </div>
                          {services.map((service) => (
                            <FormField
                              key={service.id}
                              control={form.control}
                              name="services"
                              render={({ field }) => {
                                return (
                                  <FormItem key={service.id} className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(service.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, service.id])
                                            : field.onChange(field.value?.filter((value) => value !== service.id))
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{service.label}</FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Budget Range</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under-5k">Under $5,000</SelectItem>
                                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                <SelectItem value="over-50k">Over $50,000</SelectItem>
                                <SelectItem value="not-sure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="timeline"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Desired Timeline</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select timeline" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="asap">As soon as possible</SelectItem>
                                <SelectItem value="1-3-months">1-3 months</SelectItem>
                                <SelectItem value="3-6-months">3-6 months</SelectItem>
                                <SelectItem value="6-12-months">6-12 months</SelectItem>
                                <SelectItem value="flexible">Flexible</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your project in detail, including dimensions, materials, and any specific requirements..."
                              className="min-h-[150px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="attachments"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Attachments (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              multiple
                              onChange={(e) => {
                                field.onChange(e.target.files)
                              }}
                            />
                          </FormControl>
                          <FormDescription>
                            Upload sketches, inspiration photos, or any reference materials (max 5MB each).
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>I agree to the terms and conditions</FormLabel>
                          <FormDescription>
                            By submitting this form, you agree to be contacted about your project.
                          </FormDescription>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                    Submit Quote Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div>
          <div className="sticky top-8 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-serif text-xl font-semibold">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <div>
                      <p className="font-medium">Quick Response</p>
                      <p className="text-sm text-muted-foreground">We&apos;ll contact you within 1-2 business days.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <div>
                      <p className="font-medium">Detailed Consultation</p>
                      <p className="text-sm text-muted-foreground">
                        We&apos;ll discuss your project needs and vision in detail.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <div>
                      <p className="font-medium">Custom Quote</p>
                      <p className="text-sm text-muted-foreground">
                        You&apos;ll receive a detailed quote based on your specific requirements.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <div>
                      <p className="font-medium">No Obligation</p>
                      <p className="text-sm text-muted-foreground">
                        Our quotes are free with no obligation to proceed.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-serif text-xl font-semibold">Contact Information</h3>
                <div className="space-y-3">
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-amber-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-amber-600"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <span>info@artisanwoodcraft.com</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-amber-600"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>123 Craftsman Way, Woodville, CA 12345</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

