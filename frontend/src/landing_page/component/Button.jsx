import React from "react";

/**
 * A simple Button component styled with Bootstrap 5.
 *
 * This component maps common button variants and sizes to Bootstrap's
 * corresponding utility classes.
 *
 * @param {object} props - The component props.
 * @param {string} [props.className] - Additional CSS classes to apply.
 * @param {'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link' | 'outline-primary' | 'outline-secondary' | 'outline-success' | 'outline-danger' | 'outline-warning' | 'outline-info' | 'outline-light' | 'outline-dark'} [props.variant='primary'] - The button's visual style.
 * @param {'default' | 'sm' | 'lg'} [props.size='default'] - The button's size.
 * @param {React.Ref<HTMLButtonElement>} ref - Ref to the underlying button element.
 */
const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', ...props }, ref) => {
  // Determine Bootstrap variant class
  let variantClass = `btn-${variant}`;
  if (variant.startsWith('outline-')) {
    variantClass = `btn-${variant}`;
  } else if (variant === 'default') {
    // 'default' maps to Bootstrap's 'primary' button
    variantClass = 'btn-primary';
  } else if (variant === 'destructive') {
    // 'destructive' maps to Bootstrap's 'danger' button
    variantClass = 'btn-danger';
  } else if (variant === 'ghost') {
    // 'ghost' is tricky in Bootstrap. btn-link is closest for minimal styling.
    // For true 'ghost' hover effects, custom CSS would be needed.
    variantClass = 'btn-link';
  } else if (variant === 'hero') {
    // 'hero' had custom animations/shadows in Tailwind.
    // Mapping to btn-primary. Custom CSS needed for original effects.
    variantClass = 'btn-primary';
  }

  // Determine Bootstrap size class
  let sizeClass = '';
  if (size === 'sm') {
    sizeClass = 'btn-sm';
  } else if (size === 'lg') {
    sizeClass = 'btn-lg';
  }
  // 'default' size doesn't need an extra class in Bootstrap

  // Combine Bootstrap classes and any additional className provided
  const classes = `btn ${variantClass} ${sizeClass} ${className || ''}`.trim();

  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    />
  );
});

Button.displayName = "Button";

export { Button };