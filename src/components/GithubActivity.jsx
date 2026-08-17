import React, { useState, useEffect } from 'react'
import { personalData } from '../constants'
import SectionHeader from './SectionHeader'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from './icons/BrandIcons'

const API_BASE = 'https://github-contributions-api.jogruber.de/v4'

const levelColors = [
  'bg-elevated border border-border/40',
  'bg-accent/30',
  'bg-accent/50',
  'bg-accent/75',
  'bg-accent',
]

const monthNames = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

function chunkContributions(contributions) {
  if (!contributions || contributions.length === 0) return []
  const weeks = []
  let currentWeek = []
  
  // Pad the first week if not starting on Sunday (day 0)
  const firstDay = new Date(contributions[0].date).getUTCDay()
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null)
  }

  for (const item of contributions) {
    currentWeek.push(item)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  }

  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null)
    }
    weeks.push(currentWeek)
  }

  return weeks
}

function getMonthHeaders(weeks) {
  const headers = []
  let prevMonth = -1

  weeks.forEach((week, index) => {
    const firstActiveDay = week.find(Boolean)
    if (!firstActiveDay) return
    const month = new Date(firstActiveDay.date).getUTCMonth()
    if (month !== prevMonth) {
      headers.push({ index, label: monthNames[month] })
      prevMonth = month
    }
  })

  return headers
}

export default function GithubActivity() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    fetch(`${API_BASE}/${personalData.githubUsername}?y=last`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status))
        return res.json()
      })
      .then((json) => {
        setData(json)
        setLoading(false)
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(true)
          setLoading(false)
        }
      })

    return () => controller.abort()
  }, [])

  const contributions = data?.contributions || []
  const weeks = chunkContributions(contributions)
  const monthHeaders = getMonthHeaders(weeks)
  const totalCount = data?.total?.lastYear ?? 0

  return (
    <SectionHeader
      id="github"
      title="GitHub Activity"
      aside={
        <a
          href={personalData.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <span>@{personalData.githubUsername}</span>
          <ExternalLink className="size-3" />
        </a>
      }
    >
      <div className="rounded-xl border border-border bg-surface p-4 sm:p-5 shadow-soft">
        {loading ? (
          <div className="py-12 flex flex-col items-center justify-center text-center text-muted-foreground text-xs font-mono">
            <div className="size-4 border-2 border-accent border-t-transparent rounded-full animate-spin mb-2" />
            <span>Loading contributions from GitHub...</span>
          </div>
        ) : error || weeks.length === 0 ? (
          <div className="py-8 text-center text-xs text-muted-foreground">
            <p>Check out recent activity and commits directly on GitHub.</p>
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-elevated text-xs font-medium text-foreground hover:border-accent/40"
            >
              <GitHubIcon className="size-3.5" />
              <span>Visit GitHub Profile</span>
            </a>
          </div>
        ) : (
          <div>
            {/* Month Labels */}
            <div className="relative mb-2 h-3.5 overflow-hidden">
              {monthHeaders.map((m) => (
                <span
                  key={`${m.label}-${m.index}`}
                  className="mono-meta absolute top-0 text-[0.625rem] text-muted-foreground select-none"
                  style={{
                    left: `${(m.index / Math.max(weeks.length, 1)) * 100}%`,
                  }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Heatmap Grid */}
            <div className="overflow-x-auto pb-1">
              <div
                className="grid gap-[2px] sm:gap-1 min-w-[500px]"
                style={{
                  gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                }}
              >
                {weeks.map((week, wIndex) => (
                  <div key={wIndex} className="grid grid-rows-7 gap-[2px] sm:gap-1">
                    {week.map((day, dIndex) => (
                      <div
                        key={dIndex}
                        title={
                          day
                            ? `${day.count} contribution${day.count === 1 ? '' : 's'} on ${day.date}`
                            : undefined
                        }
                        className={`aspect-square w-full rounded-[2px] transition-colors duration-100 ${
                          day ? levelColors[day.level] ?? levelColors[0] : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer metrics & Legend */}
            <div className="mt-4 pt-3 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="mono-meta text-muted-foreground">
                {totalCount} contributions in the last year
              </span>

              <div className="flex items-center gap-1.5 mono-meta text-muted-foreground">
                <span>Less</span>
                {levelColors.map((cls, i) => (
                  <span
                    key={i}
                    className={`size-2.5 rounded-[2px] ${cls}`}
                  />
                ))}
                <span>More</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionHeader>
  )
}
