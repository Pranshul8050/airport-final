-- Create hotel bookings table
CREATE TABLE IF NOT EXISTS public.hotel_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  check_in_date DATE NOT NULL,
  check_out_date DATE NOT NULL,
  guests INTEGER NOT NULL,
  room_type TEXT NOT NULL,
  special_requests TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create car rental bookings table
CREATE TABLE IF NOT EXISTS public.car_rental_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  pickup_date DATE NOT NULL,
  pickup_time TIME NOT NULL,
  return_date DATE NOT NULL,
  return_time TIME NOT NULL,
  car_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create flight bookings table
CREATE TABLE IF NOT EXISTS public.flight_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  departure_city TEXT NOT NULL,
  arrival_city TEXT NOT NULL,
  departure_date DATE NOT NULL,
  return_date DATE,
  passengers INTEGER NOT NULL,
  class TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create package bookings table
CREATE TABLE IF NOT EXISTS public.package_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  package_type TEXT NOT NULL,
  destination TEXT NOT NULL,
  travel_date DATE NOT NULL,
  duration_days INTEGER NOT NULL,
  travelers INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create event bookings table
CREATE TABLE IF NOT EXISTS public.event_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_name TEXT NOT NULL,
  event_date DATE NOT NULL,
  tickets INTEGER NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.hotel_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.car_rental_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.flight_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.package_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can create hotel bookings" ON public.hotel_bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view hotel bookings" ON public.hotel_bookings FOR SELECT USING (true);

CREATE POLICY "Anyone can create car rental bookings" ON public.car_rental_bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view car rental bookings" ON public.car_rental_bookings FOR SELECT USING (true);

CREATE POLICY "Anyone can create flight bookings" ON public.flight_bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view flight bookings" ON public.flight_bookings FOR SELECT USING (true);

CREATE POLICY "Anyone can create package bookings" ON public.package_bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view package bookings" ON public.package_bookings FOR SELECT USING (true);

CREATE POLICY "Anyone can create event bookings" ON public.event_bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can view event bookings" ON public.event_bookings FOR SELECT USING (true);