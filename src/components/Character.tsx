import { ImageRef } from './core';

export interface CharacterProps {
  id: string;
  references: ImageRef[];
  styleLock?: string;
}

export const Character = (props: CharacterProps) => {
  console.log(`🖤 Character locked: ${props.id}`);
  return props;
};