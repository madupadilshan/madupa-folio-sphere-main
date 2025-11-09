# 🎨 Modern Animations & Transitions Guide

## නවීන Animations සහ Transitions

මෙම portfolio website එකේ දැන් modern web applications වල තියෙන smooth animations සහ transitions implemented කරලා තියෙනවා.

## ✨ Added Features

### 1. **Smooth Scroll Behavior**

- සියලුම sections වලට smooth scrolling
- Custom scrollbar styling (Cyan theme)
- Scroll padding for better navigation

### 2. **Section Transitions**

සෑම section එකක්ම scroll කරද්දී different animations සමග appear වෙනවා:

- **Hero** - Fade in
- **About** - Slide up
- **Education** - Slide from left
- **Skills** - Slide from right
- **Certificates** - Slide up
- **Projects** - Scale in
- **Contact** - Slide up
- **Footer** - Fade in

### 3. **Animated Cards**

සියලුම cards වලට:

- Staggered animations (එකින් එක appear වෙනවා)
- Hover scale effects
- Tap feedback
- Smooth transitions

### 4. **Available Animation Components**

#### `SectionTransition`

```tsx
<SectionTransition direction='up' delay={0.1}>
  <YourSection />
</SectionTransition>
```

**Directions:**

- `up` - Bottom to top
- `down` - Top to bottom
- `left` - Left to right
- `right` - Right to left
- `fade` - Fade in
- `scale` - Scale in

#### `AnimatedCard`

```tsx
<AnimatedCard delay={0.2} hover={true}>
  <YourContent />
</AnimatedCard>
```

#### `ParallaxSection`

```tsx
<ParallaxSection speed={0.5}>
  <YourContent />
</ParallaxSection>
```

#### `StaggerContainer`

```tsx
<StaggerContainer staggerDelay={0.1}>
  {items.map(item => (
    <Item key={item.id} />
  ))}
</StaggerContainer>
```

#### `RevealText`

```tsx
<RevealText delay={0.3}>
  <h1>Your Heading</h1>
</RevealText>
```

#### `PageTransition`

```tsx
<PageTransition>
  <YourPage />
</PageTransition>
```

### 5. **CSS Animations**

#### Available Classes:

```css
.animate-fade-in          /* Fade in animation */
/* Fade in animation */
.animate-fade-in-up       /* Fade + slide up */
.animate-slide-in-left    /* Slide from left */
.animate-slide-in-right   /* Slide from right */
.animate-scale-in         /* Scale in */
.animate-blur-in          /* Blur to clear */
.animate-float            /* Floating effect */
.animate-marquee; /* Marquee slider */
```

### 6. **Custom Hooks**

#### `useScrollAnimation`

```tsx
const { ref, isVisible } = useScrollAnimation({
  threshold: 0.1,
  rootMargin: '0px',
  triggerOnce: true
})

;<div ref={ref} className={isVisible ? 'animate-fade-in' : ''}>
  Content
</div>
```

## 🎯 Animation Best Practices

### Timing

- **Duration**: 0.4s - 0.8s (optimal)
- **Delay**: Stagger by 0.1s - 0.2s
- **Ease**: `[0.25, 0.46, 0.45, 0.94]` (smooth cubic)

### Performance

- Use `transform` and `opacity` (GPU accelerated)
- Set `viewport={{ once: true }}` to animate only once
- Avoid animating `width`, `height`, `left`, `right`

### Accessibility

- Respect `prefers-reduced-motion` media query
- Provide fallback for users who disable animations
- Keep animations subtle and purposeful

## 🚀 Technologies Used

- **Framer Motion** - Advanced React animations
- **CSS Animations** - Lightweight keyframe animations
- **Intersection Observer API** - Scroll-triggered animations
- **CSS Custom Properties** - Dynamic theming

## 🎨 Customization

### Changing Animation Speed

```tsx
<SectionTransition
  direction="up"
  delay={0.2}  // Increase for slower start
>
```

### Changing Ease Curve

```tsx
transition={{
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94], // Customize cubic bezier
}}
```

### Disabling Animations

```tsx
<AnimatedCard hover={false}>  // Disable hover effect
```

## 📝 Examples

### Skills Section

```tsx
<SectionTransition direction='right' delay={0.1}>
  <Skills />
</SectionTransition>
```

### Projects Grid

```tsx
{
  projects.map((project, index) => (
    <AnimatedCard key={index} delay={index * 0.15}>
      <ProjectCard {...project} />
    </AnimatedCard>
  ))
}
```

### Hero Section

```tsx
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Welcome
</motion.h1>
```

## 🔄 Future Enhancements

- [ ] Page route transitions
- [ ] Loading animations
- [ ] Micro-interactions
- [ ] SVG path animations
- [ ] 3D transforms
- [ ] Gesture animations

---

**Made with ❤️ using Framer Motion**
