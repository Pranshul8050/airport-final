export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      car_rental_bookings: {
        Row: {
          car_type: string
          created_at: string
          email: string
          id: string
          name: string
          phone: string
          pickup_date: string
          pickup_time: string
          return_date: string
          return_time: string
          status: string
        }
        Insert: {
          car_type: string
          created_at?: string
          email: string
          id?: string
          name: string
          phone: string
          pickup_date: string
          pickup_time: string
          return_date: string
          return_time: string
          status?: string
        }
        Update: {
          car_type?: string
          created_at?: string
          email?: string
          id?: string
          name?: string
          phone?: string
          pickup_date?: string
          pickup_time?: string
          return_date?: string
          return_time?: string
          status?: string
        }
        Relationships: []
      }
      contact_messages: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
        }
        Relationships: []
      }
      event_bookings: {
        Row: {
          created_at: string
          email: string
          event_date: string
          event_name: string
          id: string
          name: string
          phone: string
          status: string
          tickets: number
        }
        Insert: {
          created_at?: string
          email: string
          event_date: string
          event_name: string
          id?: string
          name: string
          phone: string
          status?: string
          tickets: number
        }
        Update: {
          created_at?: string
          email?: string
          event_date?: string
          event_name?: string
          id?: string
          name?: string
          phone?: string
          status?: string
          tickets?: number
        }
        Relationships: []
      }
      flight_bookings: {
        Row: {
          arrival_city: string
          class: string
          created_at: string
          departure_city: string
          departure_date: string
          email: string
          id: string
          name: string
          passengers: number
          phone: string
          return_date: string | null
          status: string
        }
        Insert: {
          arrival_city: string
          class: string
          created_at?: string
          departure_city: string
          departure_date: string
          email: string
          id?: string
          name: string
          passengers: number
          phone: string
          return_date?: string | null
          status?: string
        }
        Update: {
          arrival_city?: string
          class?: string
          created_at?: string
          departure_city?: string
          departure_date?: string
          email?: string
          id?: string
          name?: string
          passengers?: number
          phone?: string
          return_date?: string | null
          status?: string
        }
        Relationships: []
      }
      hotel_bookings: {
        Row: {
          check_in_date: string
          check_out_date: string
          created_at: string
          email: string
          guests: number
          id: string
          name: string
          phone: string
          room_type: string
          special_requests: string | null
          status: string
        }
        Insert: {
          check_in_date: string
          check_out_date: string
          created_at?: string
          email: string
          guests: number
          id?: string
          name: string
          phone: string
          room_type: string
          special_requests?: string | null
          status?: string
        }
        Update: {
          check_in_date?: string
          check_out_date?: string
          created_at?: string
          email?: string
          guests?: number
          id?: string
          name?: string
          phone?: string
          room_type?: string
          special_requests?: string | null
          status?: string
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          active: boolean
          email: string
          id: string
          subscribed_at: string
        }
        Insert: {
          active?: boolean
          email: string
          id?: string
          subscribed_at?: string
        }
        Update: {
          active?: boolean
          email?: string
          id?: string
          subscribed_at?: string
        }
        Relationships: []
      }
      package_bookings: {
        Row: {
          created_at: string
          destination: string
          duration_days: number
          email: string
          id: string
          name: string
          package_type: string
          phone: string
          status: string
          travel_date: string
          travelers: number
        }
        Insert: {
          created_at?: string
          destination: string
          duration_days: number
          email: string
          id?: string
          name: string
          package_type: string
          phone: string
          status?: string
          travel_date: string
          travelers: number
        }
        Update: {
          created_at?: string
          destination?: string
          duration_days?: number
          email?: string
          id?: string
          name?: string
          package_type?: string
          phone?: string
          status?: string
          travel_date?: string
          travelers?: number
        }
        Relationships: []
      }
      parking_reservations: {
        Row: {
          arrival_date: string
          arrival_time: string
          created_at: string
          departure_date: string
          departure_time: string
          id: string
          promo_code: string | null
          status: string
        }
        Insert: {
          arrival_date: string
          arrival_time: string
          created_at?: string
          departure_date: string
          departure_time: string
          id?: string
          promo_code?: string | null
          status?: string
        }
        Update: {
          arrival_date?: string
          arrival_time?: string
          created_at?: string
          departure_date?: string
          departure_time?: string
          id?: string
          promo_code?: string | null
          status?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
