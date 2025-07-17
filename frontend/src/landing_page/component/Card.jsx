import React from "react";

/**
 * Card component styled with Bootstrap 5.
 * Provides a basic container for content with a border and shadow.
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Bootstrap's default card styling includes rounded corners, border, and background.
    // shadow-sm for a subtle shadow.
    className={`card rounded shadow-sm ${className || ''}`.trim()}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * CardHeader component styled with Bootstrap 5.
 * Designed for the header section of a Card.
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Bootstrap's card-header class for the header area.
    // d-flex and flex-column for vertical stacking, py-3 for padding.
    className={`card-header d-flex flex-column py-3 ${className || ''}`.trim()}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * CardTitle component styled with Bootstrap 5.
 * For the main title within a CardHeader or CardContent.
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    // Bootstrap's h5 for a heading, fw-semibold for font weight.
    className={`card-title h5 fw-semibold ${className || ''}`.trim()}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * CardDescription component styled with Bootstrap 5.
 * For a secondary, muted description within a Card.
 */
const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    // Bootstrap's card-subtitle and text-muted for a smaller, muted text.
    className={`card-subtitle text-muted ${className || ''}`.trim()}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

/**
 * CardContent component styled with Bootstrap 5.
 * For the main content area of a Card.
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Bootstrap's card-body class for content area, p-4 for padding.
    className={`card-body p-4 ${className || ''}`.trim()}
    {...props}
  />
));
CardContent.displayName = "CardContent";

/**
 * CardFooter component styled with Bootstrap 5.
 * For the footer section of a Card.
 */
const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // Bootstrap's card-footer class for the footer area.
    // d-flex and align-items-center for horizontal alignment, p-4 for padding.
    className={`card-footer d-flex align-items-center p-4 ${className || ''}`.trim()}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };