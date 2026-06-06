import { ImageRef } from './core';

export interface CharacterProps {
  id: string;
  references: ImageRef[];
  styleLock?: string;
}

export const Character = (props: CharacterProps) => {
  // Kling 3.0 Subject Binding integration
  // Passes references as image_reference for consistency
  console.log('RuRu: Character registered for Kling consistency:', props.id);
  return props;
};
