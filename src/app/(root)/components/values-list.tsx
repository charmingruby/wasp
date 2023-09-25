import { Lightbulb, MessagesSquare, Code2, Activity } from 'lucide-react'
import { ValueItem } from './value-item'

export function ValuesList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ValueItem
        icon={Lightbulb}
        title="Ideia"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
        position={0}
      />

      <ValueItem
        icon={MessagesSquare}
        title="Conversa com equipe"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
        position={0.375}
      />

      <ValueItem
        icon={Code2}
        title="Desenvolvimento"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
        position={2}
      />

      <ValueItem
        icon={Activity}
        title="Monitoramento"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium obcaecati quam quibusdam numquam fugit aspernatur? Saepe quod ex facilis molestias, exercitationem iure, hic quis commodi, rerum adipisci odit quasi."
        position={3}
      />
    </div>
  )
}
