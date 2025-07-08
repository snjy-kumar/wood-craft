"use client"

import { toast as sonnerToast } from "sonner"

// Simple wrapper around Sonner for consistent API
export function useToast() {
  return {
    toast: (props: {
      title?: string
      description?: string
      variant?: "default" | "destructive"
    }) => {
      if (props.variant === "destructive") {
        return sonnerToast.error(props.title || "Error", {
          description: props.description,
        })
      }
      
      return sonnerToast.success(props.title || "Success", {
        description: props.description,
      })
    },
    dismiss: (id?: string | number) => {
      if (id) {
        sonnerToast.dismiss(id)
      } else {
        sonnerToast.dismiss()
      }
    },
  }
}

// Direct export for convenience
export const toast = (props: {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}) => {
  if (props.variant === "destructive") {
    return sonnerToast.error(props.title || "Error", {
      description: props.description,
    })
  }
  
  return sonnerToast.success(props.title || "Success", {
    description: props.description,
  })
}
