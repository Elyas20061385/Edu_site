import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Clock } from "lucide-react";
import SignupDialog from "@/components/SignupDialog";

interface CourseCardProps {
  title: string;
  instructor: string;
  students: number;
  price: number;
  originalPrice?: number;
  image: string;
  badge: string;
  hours: number;
}

const CourseCard = ({
  title,
  instructor,
  students,
  price,
  originalPrice,
  badge,
  hours,
}: CourseCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-card border border-border rounded-xl overflow-hidden cursor-pointer card-hover-glow transition-all duration-300 group"
    >
      {/* Image placeholder */}
      <div className="relative h-44 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-4xl text-muted-foreground/20 font-bold">
            {`{ }`}
          </span>
        </div>
        <span className="absolute top-3 left-3 font-mono text-[10px] font-semibold bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-md">
          {badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <span className="text-[10px] font-bold text-muted-foreground">
              {instructor.charAt(0)}
            </span>
          </div>
          <span className="text-xs text-muted-foreground">{instructor}</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" />
            {students.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {hours}h
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-primary text-lg">
            ${price}
          </span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const courses: CourseCardProps[] = [
  {
    title: "Complete React & Next.js Developer Course 2025",
    instructor: "Sarah Chen",
    students: 12400,
    price: 49,
    originalPrice: 129,
    image: "",
    badge: "React",
    hours: 42,
  },
  {
    title: "Node.js Microservices: From Zero to Production",
    instructor: "James Miller",
    students: 8200,
    price: 39,
    originalPrice: 99,
    image: "",
    badge: "Node.js",
    hours: 36,
  },
  {
    title: "TypeScript Mastery: Advanced Patterns & Practices",
    instructor: "Alex Rivera",
    students: 6800,
    price: 29,
    originalPrice: 79,
    image: "",
    badge: "TypeScript",
    hours: 28,
  },
  {
    title: "Full-Stack Web Dev Bootcamp with MERN Stack",
    instructor: "Priya Patel",
    students: 15600,
    price: 59,
    originalPrice: 149,
    image: "",
    badge: "Full-Stack",
    hours: 64,
  },
  {
    title: "CSS Architecture & Design Systems Masterclass",
    instructor: "Emma Wilson",
    students: 4300,
    price: 34,
    originalPrice: 89,
    image: "",
    badge: "CSS",
    hours: 22,
  },
  {
    title: "Docker & Kubernetes for Web Developers",
    instructor: "Omar Hassan",
    students: 7100,
    price: 44,
    originalPrice: 109,
    image: "",
    badge: "DevOps",
    hours: 30,
  },
  {
    title: "GraphQL API Design: Complete Guide",
    instructor: "Lisa Zhang",
    students: 5200,
    price: 39,
    originalPrice: 99,
    image: "",
    badge: "GraphQL",
    hours: 26,
  },
  {
    title: "System Design & Scalable Architecture",
    instructor: "David Kim",
    students: 9800,
    price: 54,
    originalPrice: 139,
    image: "",
    badge: "Architecture",
    hours: 38,
  },
];

const CourseGrid = () => {
  const [signupOpen, setSignupOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<string | undefined>();

  const handleCourseClick = (title: string) => {
    setSelectedCourse(title);
    setSignupOpen(true);
  };

  return (
    <section id="courses" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-primary mb-2 block">
            // explore our catalog
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Popular Courses
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => handleCourseClick(course.title)}
            >
              <CourseCard {...course} />
            </motion.div>
          ))}
        </div>
      </div>
      <SignupDialog open={signupOpen} onOpenChange={setSignupOpen} courseName={selectedCourse} />
    </section>
  );
};

export default CourseGrid;
