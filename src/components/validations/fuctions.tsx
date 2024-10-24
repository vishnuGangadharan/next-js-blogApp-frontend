export function formatDate(isoDateString: string): string {
    const date = new Date(isoDateString);
    
    // Define options for formatting the date
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    
    return date.toLocaleDateString('en-US', options);
  }