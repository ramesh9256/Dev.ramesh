import { motion } from "framer-motion";
import Logo from '../../public/logo.jpg';

export const LogoComponent = ({ size = "default", animated = true }) => {
    const sizeClasses = {
        small: "w-6 h-6 sm:w-8 sm:h-8",
        default: "w-8 h-8 sm:w-10 sm:h-10",
        large: "w-12 h-12 sm:w-16 sm:h-16"
    };

    const paddingClasses = {
        small: "p-0.5",
        default: "p-1.5",
        large: "p-2"
    };

    const LogoWrapper = animated ? motion.div : "div";
    
    const logoProps = animated ? {
        initial: { opacity: 0, scale: 0.8 },
        animate: { 
            opacity: 1, 
            scale: 1,
            rotate: [0, 360]
        },
        transition: { 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear",
            scale: {
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
            }
        },
        whileHover: { 
            rotate: 180,
            scale: 1.2,
            transition: { duration: 0.3 }
        },
        whileTap: { scale: 0.9 }
    } : {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5 }
    };

    return (
        <LogoWrapper
            {...logoProps}
            className={`${sizeClasses[size]} bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 backdrop-blur-sm`}
        >
            {/* Inner glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl"></div>
            
            {/* Logo container with proper padding */}
            <div className={`relative z-10 ${paddingClasses[size]}`}>
                <img 
                    src={Logo} 
                    alt="Ramesh Kumar" 
                    className="w-full h-full object-contain filter brightness-110 contrast-110 drop-shadow-md"
                />
            </div>
            
            {/* Animated shine effect */}
            {animated && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                        x: ["-100%", "100%"]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut"
                    }}
                />
            )}
        </LogoWrapper>
    );
};

// Alternative minimalist version
export const MinimalLogoComponent = ({ size = "default", animated = true }) => {
    const sizeClasses = {
        small: "w-6 h-6 sm:w-8 sm:h-8",
        default: "w-8 h-8 sm:w-10 sm:h-10",
        large: "w-12 h-12 sm:w-16 sm:h-16"
    };

    const LogoWrapper = animated ? motion.div : "div";
    
    const logoProps = animated ? {
        animate: { 
            rotate: [0, 360],
            scale: [1, 1.05, 1]
        },
        transition: { 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
        },
        whileHover: { 
            rotate: 0,
            scale: 1.1,
            filter: "drop-shadow(0 0 15px rgba(0,255,200,0.8))"
        }
    } : {};

    return (
        <LogoWrapper
            {...logoProps}
            className={`${sizeClasses[size]} flex items-center justify-center cursor-pointer`}
        >
            <img 
                src={Logo} 
                alt="Ramesh Kumar" 
                className="w-full h-full object-contain transition-all duration-300"
            />
        </LogoWrapper>
    );
};

// Glass morphism version
export const GlassLogoComponent = ({ size = "default", animated = true }) => {
    const sizeClasses = {
        small: "w-6 h-6 sm:w-8 sm:h-8",
        default: "w-8 h-8 sm:w-10 sm:h-10",
        large: "w-12 h-12 sm:w-16 sm:h-16"
    };

    const LogoWrapper = animated ? motion.div : "div";
    
    const logoProps = animated ? {
        animate: { 
            rotate: [0, 360],
            y: [0, -5, 0]
        },
        transition: { 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
        },
        whileHover: { 
            y: -10,
            scale: 1.1,
            backgroundColor: "rgba(0,255,200,0.1)"
        }
    } : {};

    return (
        <LogoWrapper
            {...logoProps}
            className={`${sizeClasses[size]} bg-white/5 backdrop-blur-md border border-cyan-400/30 rounded-xl sm:rounded-2xl flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300`}
        >
            <img 
                src={Logo} 
                alt="Ramesh Kumar" 
                className="w-full h-full object-contain p-1.5"
            />
        </LogoWrapper>
    );
};

// Usage in Navbar:

// Choose one of these based on your preference:

// <MinimalLogoComponent size="default" animated={true} />
// <GlassLogoComponent size="default" animated={true} />