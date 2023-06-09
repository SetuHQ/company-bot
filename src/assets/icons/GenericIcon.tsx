export interface GenericIconProps {
  color?: string;
}

export const GenericIcon = ({ color }: GenericIconProps) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="32" width="3" height="12" rx="1.5" fill="white" />
      <rect x="57" y="32" width="3" height="12" rx="1.5" fill="white" />
      <rect x="6" y="20" width="52" height="36" rx="16" fill={`#${color}`} />
      <g style={{ mixBlendMode: 'multiply' }}>
        <rect x="10" y="24" width="44" height="28" rx="14" fill={`#${color}`} />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <path
          d="M38.1887 45.5229C37.9141 46.2931 38.3163 47.1549 39.1237 47.2835C39.9018 47.4075 40.6967 47.4165 41.4825 47.308C42.7593 47.1316 43.9747 46.6501 45.0258 45.9043C46.0769 45.1585 46.9328 44.1702 47.5209 43.0234C47.8829 42.3175 48.1369 41.5643 48.2769 40.7889C48.4222 39.9842 47.7415 39.32 46.9239 39.3249V39.3249C46.1062 39.3298 45.4683 40.0102 45.2371 40.7945C45.1481 41.0964 45.0308 41.3903 44.8862 41.6723C44.5152 42.3957 43.9754 43.019 43.3124 43.4894C42.6493 43.9599 41.8827 44.2636 41.0774 44.3748C40.7635 44.4182 40.4473 44.4318 40.133 44.4161C39.3163 44.3753 38.4634 44.7528 38.1887 45.5229V45.5229Z"
          fill={`#${color}`}
        />
      </g>
      <circle cx="26" cy="32" r="2" fill="white" />
      <circle cx="38" cy="32" r="2" fill="white" />
      <circle cx="32" cy="13" r="4" fill={`#${color}`} />
      <rect x="31" y="16" width="2" height="4" fill={`#${color}`} />
      <g style={{ mixBlendMode: 'multiply' }}>
        <rect x="4" y="32" width="3" height="12" rx="1.5" fill={`#${color}`} />
      </g>
      <g style={{ mixBlendMode: 'multiply' }}>
        <rect x="57" y="32" width="3" height="12" rx="1.5" fill={`#${color}`} />
      </g>
    </svg>
  );
};
